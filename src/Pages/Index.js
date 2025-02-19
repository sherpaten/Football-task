import React from "react";
import useTitle from "../Components/SetTitle";
import HomeCard from "../Components/HomeCard";

import gamewrapper from "../Assets/gamewrapper.jpg";
import teamwrapper from "../Assets/teamwrapper.jpg";
import addwrapper from "../Assets/addwrappper.jpg";
import updatewrapper from "../Assets/updatewrapper.jpg";
import deletewrapper from "../Assets/deletewrapper.jpg";
import groupwrapper from "../Assets/groupwrapper.jpg";

const Index = () => {
  useTitle("Home");
  return (
    <div className="text-white min-h-screen p-8">
      <div className="bg-green-50 rounded-3xl bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-14 shadow-lg">{/*gradient bg*/}
        <div className="text-center mb-12 ">
          <h1 className="text-gray text-3xl font-bold ">
            Welcome to{" "}
            <span className="text-[#FFEB3B] text-4xl ">FOOTBALL MANAGER</span>
          </h1>{" "}
          {/*need to come up with name for app*/}
          <p className="text-gray mt-4 text-lg">
            Manage your teams, track games, and stay updated with the latest
            football stats.
          </p>
        </div>
        <div className="grid gap-x-0 gap-y-8 grid-cols-3  ">
          <HomeCard
            title="Games"
            description="View all games records"
            link="/Games"
            bgwrapper={gamewrapper}
            icon_name="sports_soccer"
          />
          <HomeCard
            title="Update Data"
            description="Update data"
            link="/UpdateData"
            bgwrapper={updatewrapper}
            icon_name="update"
          />
          <HomeCard
            title="Teams"
            description="View all teams records"
            link="/Teams"
            bgwrapper={teamwrapper}
            icon_name="groups"
          />
          <HomeCard
            title="Add Data to Teams"
            description="Add data to teams"
            link="/AddData"
            bgwrapper={addwrapper}
            icon_name="add_box"
          />
          <HomeCard
            title="Delete Records"
            description="Delete records"
            link="/DeleteData"
            bgwrapper={deletewrapper}
            icon_name="person_remove"
          />
          <HomeCard
            title="Project Members"
            description="View project members"
            link="/Members"
            bgwrapper={groupwrapper}
            icon_name="groups"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
