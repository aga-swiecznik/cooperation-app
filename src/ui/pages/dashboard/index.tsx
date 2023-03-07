import { Col, Typography } from "antd";
import { ContentBox } from "~/ui/components/Content";
import { MyActions } from "~/ui/components/dashboard/MyActions";
import { GoodsToCollect } from "~/ui/components/dashboard/GoodsToCollect";
import { HelpingActions } from "~/ui/components/dashboard/HelpingActions";
import { EndingActions } from "~/ui/components/dashboard/EndingActions";
import { GuttedRow } from "~/ui/components/styles";
import { type Action } from "@prisma/client";

const { Title } = Typography;

interface DashboardProps {
  userActions: Action[];
  toCollectActions: Action[];
  helpingActions: Action[];
  endingActions: Action[];
}

export const Dashboard = ({ actions }: { actions: DashboardProps }) => {
  return (
    <>
      <Title>Dashboard</Title>
      <GuttedRow>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Akcje w których bierzesz udział</Title>
            <MyActions actions={actions.userActions} />
          </ContentBox>
        </Col>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Masz do odebrania</Title>
            <GoodsToCollect actions={actions.toCollectActions} />
          </ContentBox>
        </Col>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Pomagasz</Title>
            <HelpingActions actions={actions.helpingActions} />
          </ContentBox>
        </Col>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Kończące się akcje</Title>
            <EndingActions actions={actions.endingActions} />
          </ContentBox>
        </Col>
      </GuttedRow>
    </>
  );
};
