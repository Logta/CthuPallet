import React, { ReactNode } from "react";
import Link from "next/link";
import {
  Container,
  Divider,
  Dropdown,
  Image,
  List,
  Menu,
  Segment,
} from "semantic-ui-react";

import styles from "./BaseLayout.module.scss";

type Props = {
  children?: ReactNode;
};

const App = (props: Props) => {
  const { children } = props;

  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item as="a" header>
            <Image
              size="mini"
              alt="my image"
              src="/PM_Desine.png"
              style={{ marginRight: "1.5em" }}
            />
            <Link href="/">クトゥパレット</Link>
          </Menu.Item>
          <Menu.Item as="a" />
          <Menu.Item as="a">
            <Link href="/users">
              <a>Users List</a>
            </Link>
          </Menu.Item>
          <Menu.Item as="a">
            <Link href="/about">
              <a>About</a>
            </Link>
          </Menu.Item>

          <Dropdown item simple text="Dropdown">
            <Dropdown.Menu>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Header>Header Item</Dropdown.Header>
              <Dropdown.Item>
                <i className="dropdown icon" />
                <span className="text">Submenu</span>
                <Dropdown.Menu>
                  <Dropdown.Item>List Item</Dropdown.Item>
                  <Dropdown.Item>List Item</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown.Item>
              <Dropdown.Item>List Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Container>
      </Menu>

      <div className={styles.children}>{children}</div>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <Divider inverted section />
          <Image centered size="mini" src="/logo.png" alt="my logo" />
          <List horizontal inverted divided link size="small">
            <List.Item as="a" href="#">
              Site Map
            </List.Item>
            <List.Item as="a" href="#">
              Contact Us
            </List.Item>
            <List.Item as="a" href="#">
              Terms and Conditions
            </List.Item>
            <List.Item as="a" href="#">
              Privacy Policy
            </List.Item>
          </List>
        </Container>
      </Segment>
    </div>
  );
};

export { App as BaseLayout };
