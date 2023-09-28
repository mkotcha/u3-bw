import { Col, Container, Row } from "react-bootstrap";
import AsideProfilePage from "./AsideProfilePage";
import MainProfilePage from "./MainProfilePage";
import Recommended4u from "./recommended4u";
import ResourcesCard from "./ResourcesCard";
import ActivityCard from "./ActivityCard";
import ExperienceCard from "./ExperienceCard";
import EducationCard from "./EducationCard";
import AnalyticsCard from "./AnalyticsCard";
import SkillsCard from "./SkillsCard";
import PersonalPosts from "./PersonalPosts";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { personalFetch } from "../redux/actions";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    if (params.id) dispatch(personalFetch(params.id));
  }, [dispatch, params.id]);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs={8} lg={7} className="">
            <MainProfilePage />
            <Recommended4u />
            <ExperienceCard />
            <PersonalPosts />
            <AnalyticsCard />
            <ResourcesCard></ResourcesCard>
            <ActivityCard></ActivityCard>
            <EducationCard></EducationCard>
            <SkillsCard></SkillsCard>
          </Col>
          <Col xs={4} lg={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
