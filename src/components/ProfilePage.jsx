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
        <Row>
          <Col xs={7}>
            <MainProfilePage />
            <Recommended4u></Recommended4u>
            <AnalyticsCard></AnalyticsCard>
            <ResourcesCard></ResourcesCard>
            <ActivityCard></ActivityCard>
            <ExperienceCard></ExperienceCard>
            <EducationCard></EducationCard>
            <SkillsCard></SkillsCard>
          </Col>
          <Col xs={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ProfilePage;
