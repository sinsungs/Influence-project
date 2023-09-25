package com.youtubers.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.youtubers.entity.Influencer;
import com.youtubers.entity.User;
import com.youtubers.repository.InfluencerRepository;
import com.youtubers.repository.MeetRepository;
import com.youtubers.repository.MeetUserRepository;
import com.youtubers.repository.PaymentRepository;
import com.youtubers.repository.PostInfluencerRepository;
import com.youtubers.repository.PostRepository;

import lombok.RequiredArgsConstructor;
import lombok.extern.log4j.Log4j2;

@Service
@RequiredArgsConstructor
@Log4j2
public class StatisticsService {
	
	private final InfluencerRepository influencerRepositoy;
	private final PostRepository postRepository;
	private final PostInfluencerRepository postInfluencerRepository;
	private final MeetRepository meetRepository;
	private final MeetUserRepository meetuserRepository;
	private final PaymentRepository paymentRepository;
	

	public List<User> findTop5UsersWithMostMeets() {

		List<User> top5Users = meetuserRepository.findTop5UsersWithMostMeets();
		
		int limit = 5;
		if (top5Users.size() > limit) {
		    top5Users = top5Users.subList(0, limit);
		}
		
		return top5Users;
	}
	
	
	public List<Influencer> findTop5UsersWithMostRecommend() {

		List<Influencer> top5Influencers = postInfluencerRepository.findTop5UsersWithMostRecommend();
		
		int limit = 5;
		if (top5Influencers.size() > limit) {
			top5Influencers = top5Influencers.subList(0, limit);
		}
		
		return top5Influencers;
	}

	
	public int meetRank() {
		// TODO Auto-generated method stub
		return meetuserRepository.countMeetUser();
	}
	
	
	public int recommnedRank() {
		// TODO Auto-generated method stub
		return postInfluencerRepository.recommnedRank();
	}
	

	public int influenceCount() {
		// TODO Auto-generated method stub
		return influencerRepositoy.countAllInfluencers();
	}

	public int categoryCount() {
		// TODO Auto-generated method stub
		return influencerRepositoy.countInfluencersByCategory();
	}
	
	public int postCount() {
		// TODO Auto-generated method stub
		return postRepository.countAllPost();
	}

	public int meetCount() {
		// TODO Auto-generated method stub
		return meetRepository.countMeet();
	}

	public int meetUserCount() {
		// TODO Auto-generated method stub
		return meetuserRepository.countMeetUser();
	}
	
	public int paymentCount() {
		return paymentRepository.TotalDeposit();
	}
	
	public int ranking() {
		// TODO Auto-generated method stub
		return 0;
	}















//	public Double  totalDepositToday() {
//		// TODO Auto-generated method stub
//		return paymentRepository.TotalDepositToday();
//	}

}
