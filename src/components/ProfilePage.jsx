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
      <div>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} lg={7} className="">
            <MainProfilePage />
            <Recommended4u />
            <ExperienceCard />
            <PersonalPosts />
            <AnalyticsCard />
            <ResourcesCard />
            <ActivityCard />
            <EducationCard />
            <SkillsCard />
          </Col>
          <Col xs={12} sm={10} lg={3}>
            <AsideProfilePage />
          </Col>
        </Row>
      </div>
    </>
  );
};
export default ProfilePage;
