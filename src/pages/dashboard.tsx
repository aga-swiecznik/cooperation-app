import { Col, Skeleton, Typography } from "antd";
import { ContentBox } from "~/ui/components/Content";
import { MyActions } from "~/ui/components/dashboard/MyActions";
import { GoodsToCollect } from "~/ui/components/dashboard/GoodsToCollect";
import { HelpingActions } from "~/ui/components/dashboard/HelpingActions";
import { EndingActions } from "~/ui/components/dashboard/EndingActions";
import { GuttedRow } from "~/ui/components/styles";
import { api } from "~/utils/api";

const { Title } = Typography;

export default function Home() {
  const { data: actions } = api.dashboard.actions.useQuery();

  if (!actions) return <Skeleton active />;

  return (
    <>
      <Title>Dashboard</Title>
      <GuttedRow>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Moje akcje</Title>
            <MyActions actions={actions.userActions} />
          </ContentBox>
        </Col>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Do odebrania</Title>
            <GoodsToCollect actions={actions.toCollectActions} />
          </ContentBox>
        </Col>
        <Col lg={12}>
          <ContentBox>
            <Title level={2}>Pomagam</Title>
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
}
