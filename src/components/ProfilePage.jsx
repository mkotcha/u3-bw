import { Col, Row } from "react-bootstrap";
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
      <Row className="justify-content-center w-100">
        <Col xs={12} sm={10} lg={7} xxl={6} className="">
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
        <Col xs={12} sm={10} lg={3} xxl={2}>
          <AsideProfilePage />
        </Col>
      </Row>
    </>
  );
};
export default ProfilePage;
