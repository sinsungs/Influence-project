package com.youtubers.entity;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class PostYoutuber {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long pyno;

    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "post_id")
    private Post post;

    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "youtuber_id")
    private Influencer influencer;


}