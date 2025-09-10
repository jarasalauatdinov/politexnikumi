import { Stack, Title } from "@mantine/core";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const Sidebar = () => {
  const [openMain, setOpenMain] = useState(false);

  return (
    <Stack
      gap={40}
      p={20}
      w={"240px"}
      h={"100vh"}
      style={{ borderRight: "1px solid grey" }}
    >
      <Title fz={18} c="blue"><MdOutlineAdminPanelSettings /> Politexnikumi</Title>

      <Stack gap={5}>
        <NavLink className="sidebar-link" to="school">School</NavLink>
        <NavLink className="sidebar-link" to="position">Position</NavLink>
        <NavLink className="sidebar-link" to="album">Album</NavLink>
        <NavLink className="sidebar-link" to="users">User</NavLink>
        <NavLink className="sidebar-link" to="employee">Employee</NavLink>
        <NavLink className="sidebar-link" to="news">News</NavLink>
        <NavLink className="sidebar-link" to="document">Document</NavLink>

        {/* <div>
          <div
            className="sidebar-link"
            style={{ cursor: "pointer", fontWeight: "bold" }}
            onClick={() => setOpenMain(!openMain)}
          >
            Main {openMain ? "<close" : "<open"}
          </div>
          {openMain && (
            <Stack pl={15} gap={5}>
              <NavLink className="sidebar-link" to="home">Home</NavLink>
              <NavLink className="sidebar-link" to="about">About</NavLink>
              <NavLink className="sidebar-link" to="education">Education</NavLink>
              <NavLink className="sidebar-link" to="schedule">Schedule</NavLink>
            </Stack>
          )}
        </div> */}

        <NavLink className="sidebar-link" to="rule">Rule</NavLink>
        <NavLink className="sidebar-link" to="value">Value</NavLink>
        <NavLink className="sidebar-link" to="club">Club</NavLink>
        <NavLink className="sidebar-link" to="faq">FAQ</NavLink>
        <NavLink className="sidebar-link" to="schoolhours">School Hours</NavLink>
        <NavLink className="sidebar-link" to="target">Target</NavLink>
        <NavLink className="sidebar-link" to="history">History</NavLink>
        <NavLink className="sidebar-link" to="information">Information</NavLink>
        <NavLink className="sidebar-link" to="vacancy">Vacancy</NavLink>
      </Stack>
    </Stack>
  );
};

export default Sidebar;
