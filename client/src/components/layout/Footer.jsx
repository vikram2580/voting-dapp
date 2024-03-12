import React from "react";
import { Icon, IconGroup, Segment, SegmentGroup } from "semantic-ui-react";
import "../../App.css";

const Footer = () => {
  return (
    <Segment size="large" tertiary inverted color="blue" textAlign="center">
      Made with <Icon color="red" name="heart"></Icon> by{" "}
      <a
        target="_blank"
        style={{ color: "black" }}
        href=""
      >
        VSW
      </a>{" "}
      <br />
    </Segment>
  );
};

export default Footer;
