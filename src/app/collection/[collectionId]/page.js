'use client'

import attr from '@/app/data/rarity_attrs.json';
import { Col, Row } from "reactstrap";
import Blog from "@/app/components/dashboard/Blog";
import '../../../styles/style.scss';


export default function CollectionDetails({ params }) {
  const result = attr.filter((attr) => attr.collectionId === params.collectionId && attr.status_code == 200);

  return (
    <div className="container-fluid">
      <div className="px-4 py-5">
        <Row>
          {result.map((blg) => {
            var data = JSON.parse(blg.content)["data"];

            return (
              <Col sm="6" lg="6" xl="3" key={blg.title}>
                <Blog
                  image=""
                  title={data.rarityRank.toString()}
                  subtitle="rarity rank"
                  text={data.attributes ?? []}
                  color="primary"
                  url={"https://www.cryptoslam.io/" + blg.collectionId + "/mint/" + blg.tokenId}
                />
              </Col>
            )
          })}
        </Row>
      </div>
    </div>
  );
}