package com.example.corpsymph.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class User1Details {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userid;

    private String username;

    private String useremail;

    private String dateOfBirth;

    private String gender;

    public User1Details(int userid, String username, String useremail, String dateOfBirth, String gender) {
        this.userid = userid;
        this.username = username;
        this.useremail = useremail;
        this.dateOfBirth = dateOfBirth;
        this.gender = gender;
    }

    public User1Details() {

    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUseremail() {
        return useremail;
    }

    public void setUseremail(String useremail) {
        this.useremail = useremail;
    }

    public String getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(String dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    @Override
    public String toString() {
        return "UserDetails [userid=" + userid + ", username=" + username + ", useremail=" + useremail
                + ", dateOfBirth=" + dateOfBirth + ", gender=" + gender + "]";
    }

}