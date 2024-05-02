import { PropsWithChildren } from "react";
import { useGo, useNavigation } from "@refinedev/core";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "react95";
import { AppLayout } from "../../components/layout";
import { VideoClubTodayDate } from "../../components/today-date";
import { RVCSplashScreen } from "../../components/rvc-splash-screen";
import { getCdnUrl } from "../../utils/get-cdn-url";

export const VideoClubLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const { createUrl, listUrl } = useNavigation();
  const go = useGo();

  const links = [
    {
      icon: getCdnUrl("/rent-tape.png"),
      label: "Rent Tape",
      href: listUrl("rentals-rent"),
    },
    {
      icon: getCdnUrl("/return-tape.png"),
      label: "Return Tape",
      href: listUrl("rentals-return"),
    },
    {
      icon: getCdnUrl("/add-title.png"),
      label: "Add Title",
      href: createUrl("titles"),
    },
    {
      icon: getCdnUrl("/browse-titles.png"),
      label: "Browse Titles",
      href: listUrl("titles"),
    },
    {
      icon: getCdnUrl("/add-member.png"),
      label: "Add Member",
      href: createUrl("members"),
    },
    {
      icon: getCdnUrl("/browse-members.png"),
      label: "Browse Members",
      href: listUrl("members"),
    },
    {
      icon: getCdnUrl("/report.png"),
      label: "Report",
      href: listUrl("reports"),
    },
    {
      icon: getCdnUrl("/settings.png"),
      label: "Settings",
      href: listUrl("settings"),
    },
  ];

  return (
    <>
      <StyledAppLayout
        title="Refine Video Club"
        iconURL={getCdnUrl("/refine-video-club-app-icon-pixelated.png")}
        onClose={() => navigate("/")}
        onMinimize={() => navigate("/")}
        menu={[
          {
            label: "Tapes",
            children: [
              {
                label: "Rent Tape",
                onClick: () => navigate("/video-club/tapes/rent"),
              },
              {
                label: "Return Tape",
                onClick: () => navigate("/video-club/tapes/return"),
              },
            ],
          },
          {
            label: "Titles",
            children: [
              {
                label: "Add Title",
                onClick: () => navigate("/video-club/titles/new"),
              },
              {
                label: "Browse Titles",
                onClick: () => navigate("/video-club/titles"),
              },
            ],
          },
          {
            label: "Members",
            children: [
              {
                label: "Add Member",
                onClick: () => navigate("/video-club/members/new"),
              },
              {
                label: "Browse Members",
                onClick: () => navigate("/video-club/members"),
              },
            ],
          },
          {
            label: "Help",
            children: [
              {
                label: "Documentation",
                onClick: () => window.open("https://refine.dev/docs"),
              },
              {
                label: "About",
                onClick: () =>
                  go({
                    hash: "about",
                    type: "replace",
                    options: { keepHash: false, keepQuery: true },
                    to: "",
                  }),
              },
            ],
          },
        ]}
      >
        <Container>
          <TodayDate />
          <HomeContainer>
            <Logo
              src={getCdnUrl("/refine-video-club-emboss-logo.png")}
              alt="refine video club logo"
            />

            <Links>
              {links.map((link) => (
                <Link to={link.href} key={link.label}>
                  <LinkItem>
                    <LinkItemImg src={link.icon} alt={link.label} />
                    <LinkItemLabel>{link.label}</LinkItemLabel>
                  </LinkItem>
                </Link>
              ))}
            </Links>
          </HomeContainer>

          {children}
        </Container>
      </StyledAppLayout>
      <RVCSplashScreen />
    </>
  );
};

const StyledAppLayout = styled(AppLayout)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  background-image: url(${getCdnUrl("//noisy-gray.png")});
  background-repeat: repeat;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

const Logo = styled.img`
  user-select: none;
  margin-right: auto;
  margin-left: auto;
  width: 476px;
  height: 200px;
`;

const TodayDate = styled(VideoClubTodayDate)`
  position: absolute;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: 8px;
  margin-top: 8px;
`;

const Links = styled.div`
  width: 100%;
  max-width: 608px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const LinkItem = styled(Button)`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: unset;
`;

const LinkItemImg = styled.img`
  width: 80px;
  height: 80px;
`;

const LinkItemLabel = styled.div`
  padding: 1px 0;
`;
