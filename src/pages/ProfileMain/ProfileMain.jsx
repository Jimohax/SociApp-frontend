import React from "react";
import Post from "../../components/Posts/Post";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import Trend from "../../components/Trend/Trend";
import "./ProfileMain.css";

const ProfileMain = () => {
	return (
		<div className="ProfileMain">
			<ProfileLeft />

			<div className="ProfileCenter">
				<ProfileCard  location ="profilePage" />
				<Post />
			</div>

			<Trend />
		</div>
	);
};

export default ProfileMain;
