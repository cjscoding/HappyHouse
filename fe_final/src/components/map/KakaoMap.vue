<template>
<div class="mapContainer">
    <div class="map" id="map"></div>
</div>
</template>

<script>
import {
    mapState,
    mapMutations
} from "vuex";
const houseStore = "houseStore";
let me;
//let infowindow = new kakao.maps.InfoWindow({ zIndex: 1 });
// 커스텀 오버레이를 생성합니다
let customOverlay;
let root = "@/assets/apt.png";
export default {
    name: "KakaoMap",
    data() {
        return {
            map: null,
            markers: [],
        };
    },
    mounted() {
        me = this;
        if (window.kakao && window.kakao.maps) {
            this.initMap();
        } else {
            const script = document.createElement("script");
            /* global kakao */
            script.onload = () => kakao.maps.load(this.initMap);
            script.src =
                "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&libraries=services&appkey=e8a9d3e58dcca42650dd8a06ba2db760";
            document.head.appendChild(script);
        }
    },
    computed: {
        ...mapState(houseStore, ["positions", "abc", "houses"])
    },
    watch: {
        positions: function (val) {
            console.log("val " + val);
            this.removeMarker();
            this.displayMarkers(val);
        },

    },
    methods: {
        ...mapMutations(houseStore, ["SET_DETAIL_HOUSE"]),
        initMap() {
            const container = document.getElementById("map");
            const options = {
                center: new kakao.maps.LatLng(33.450701, 126.570667),
                level: 5,
            };
            this.map = new kakao.maps.Map(container, options);
        },
        changeSize(size) {
            const container = document.getElementById("map");
            container.style.width = `${size}px`;
            container.style.height = `${size}px`;
            this.map.relayout();
        },
        addMarker(position, i) {
            console.log("check addMarker");
            console.log(position);
            // let imageSrc = "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png"; // 마커 이미지 url, 스프라이트 이미지를 씁니다
            // let imageSize = new kakao.maps.Size(36, 37); // 마커 이미지의 크기
            // let imgOptions = {
            //     spriteSize: new kakao.maps.Size(36, 691), // 스프라이트 이미지의 크기
            //     spriteOrigin: new kakao.maps.Point(0, 46+ 10), // 스프라이트 이미지 중 사용할 영역의 좌상단 좌표
            //     offset: new kakao.maps.Point(13, 37), // 마커 좌표에 일치시킬 이미지 내에서의 좌표
            // };
            //let markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize,imgOptions);
            let marker = new kakao.maps.Marker({
                position: position, // 마커의 위치
                //image: markerImage,
            });
            marker.setZIndex(i);
            marker.setMap(this.map); // 지도 위에 마커를 표출합니다
            this.markers.push(marker); // 배열에 생성된 마커를 추가합니다

            return marker;
        },

        // 지도 위에 표시되고 있는 마커를 모두 제거합니다
        removeMarker() {
            console.log("removeMarker act");
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        },
        //검색결과 항목을 Element로 반환하는 함수입니다
        getListItem(index, place) {
            console.log(place.aptName);
            let el = document.createElement("li");
            let itemStr = `
        <span class="markerbg marker_${index + 1}></span>
        <div class="info"><h5>${place.aptName}</h5> <button>관심등록</button>
        <span>${place.address}</span>
        `;
            el.innerHTML = itemStr;
            el.className = "item";

            return el;
        },

        //검색결과 목록 또는 마커를 클릭했을 때 호출되는 함수입니다
        //인포윈도우에 장소명을 표시합니다
        displayInfowindow(marker, title, place) {
            // 검색 결과 목록이나 마커를 클릭했을 때 장소명을 표출할 인포윈도우를 생성합니다
            let customOverlay;
            console.log(title);
            let content = `
            <div class="overlaybox" style="background-color:white;">
                <div class="boxtitle">${title}</div>
                <div class="first"><img src="${root}" style="width:247px; height:136px;" alt=""></div>
                <ul>
                    <li class="up">
                        <span class="title">건축년도</span>
                        <span class="count">${place.buildYear}</span>
                    </li>
                    <li>
                        <span class="title">주소</span>
                        <span class="count">${place.address}</span>
                    </li>
                    <li>
                        <span class="title">최신거래금액</span>
                        <span class="count">${place.recentPrice}</span>
                    </li>
                    <li>
                        <span class="last" id="recenthistor" data-toggle="modal" data-target="#myModal">아파트정보 update</span>
                    </li>
                </ul>
            </div>
        `;
            let position = new kakao.maps.LatLng(marker.getPosition().getLat() + 0.00033, marker.getPosition().getLng() - 0.00003);
            customOverlay = new kakao.maps.CustomOverlay({
                position: position,
                content: content,
                xAnchor: 0.3,
                yAnchor: 0.91,
            });
            customOverlay.setMap(me.map);
        },
        removeAllChildNods(el) {
            while (el.hasChildNodes()) {
                el.removeChild(el.lastChild);
            }
        },
        displayMarkers(places) {
            console.log(places);
            let geocoder = new kakao.maps.services.Geocoder();
            let fragment = document.createDocumentFragment();
            let bounds = new kakao.maps.LatLngBounds();
            // 지도에 표시되고 있는 마커를 제거합니다
            this.removeMarker();
            console.log(this.map);
            console.log(this.addMarker);
            for (let i = 0; i < places.length; i++) {
                let placePosition;
                let itemEl = me.getListItem(i, places[i]);
                geocoder.addressSearch(places[i].address, function (result, status) {
                    // 정상적으로 검색이 완료됐으면 
                    if (status === kakao.maps.services.Status.OK) {
                        placePosition = new kakao.maps.LatLng(result[0].y, result[0].x);
                        //let marker = "";
                        let marker = me.addMarker(placePosition, i);
                        //마커

                        bounds.extend(placePosition);
                        me.map.setBounds(bounds);
                        (function (marker, title) {
                            kakao.maps.event.addListener(marker, "click", function () {
                                //me.displayInfowindow(marker, title, place);
                                me.map.setCenter(marker.getPosition());
                                console.log(me.houses);
                                console.log(me.houses[marker.getZIndex()]);
                                console.log(marker);
                                me.SET_DETAIL_HOUSE(me.houses[marker.getZIndex()]);
                            });

                            kakao.maps.event.addListener(me.map, "click", function () {
                                console.log(customOverlay);
                                customOverlay.setMap(null);
                            });

                            itemEl.onmouseover = function () {
                                me.displayInfowindow(marker, title);
                            };

                            itemEl.onmouseout = function () {
                                customOverlay.setMap(null);
                            };
                        })(marker, places[i].aptName, places[i]);

                        fragment.appendChild(itemEl);
                    }
                });

            }
        },
    },

};
</script>

<style scoped>
.mapContainer {
    padding: 0 200px;
    margin-bottom: 40px;
}

.map {
    width: 100%;
    height: 50vh;
    border-radius: 5px;
}
</style>
