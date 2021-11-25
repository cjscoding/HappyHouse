package com.ssafy.vue.model.service;

import com.ssafy.vue.model.MemberDto;

public interface MemberService {

	public MemberDto login(MemberDto memberDto) throws Exception;
	public int register(MemberDto memberDto) throws Exception;
	public MemberDto userInfo(String userid) throws Exception;
	public int update(MemberDto memberDto) throws Exception;
	public int deleteMember(String userid) throws Exception;
}
