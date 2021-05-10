import BaseLayoutFull from "components/layouts/BaseLayoutFull"
import LikeComment from "components/LikeComment"
import { Col, Row } from "reactstrap"

const IdeaDetail = () => {
  return (
    <BaseLayoutFull withContainer>
      <Row>
        <Col lg="8">
          <LikeComment />
        </Col>
        <Col lg="4"></Col>
      </Row>
    </BaseLayoutFull>
  )
}

export default IdeaDetail