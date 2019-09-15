package com.aphid.botlogic.Entity;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class LinkedInUser {
	
private Integer id;
private String firstName;
private String lastName;
private String headline;
private String siteStandardProfileRequest;

public LinkedInUser() {
	
}


public LinkedInUser(Integer id, String firstName, String lastName, String headline, String siteStandardProfileRequest) {
	super();
	this.id = id;
	this.firstName = firstName;
	this.lastName = lastName;
	this.headline = headline;
	this.siteStandardProfileRequest = siteStandardProfileRequest;
}


public Integer getId() {
	return id;
}
public void setId(Integer id) {
	this.id = id;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getHeadline() {
	return headline;
}
public void setHeadline(String headline) {
	this.headline = headline;
}
public String getSiteStandardProfileRequest() {
	return siteStandardProfileRequest;
}
public void setSiteStandardProfileRequest(String siteStandardProfileRequest) {
	this.siteStandardProfileRequest = siteStandardProfileRequest;
}


@Override
public String toString() {
	return "LinkedInUser [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", headline=" + headline
			+ ", siteStandardProfileRequest=" + siteStandardProfileRequest + "]";
}



}
