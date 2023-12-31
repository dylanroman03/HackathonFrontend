"use client";

import attr from "@/app/data/rarity_attrs.json";
import { Col, Row } from "reactstrap";
import Blog from "../../components/dashboard/Blog";
import "../../../styles/style.scss";
import { HeartCrack } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CollectionDetails({
  params,
}: {
  params: { collectionId: string };
}) {
  const result = attr.filter(
    (attr) =>
      attr.collectionId === params.collectionId && attr.status_code === 200
  );

  return (
    <div className="container-fluid">
      <div className="px-4 py-5">
        {result && result.length > 0 ? (
          <Row>
            {result.map((blg) => {
              var data = JSON.parse(blg.content)["data"];

              return (
                <Col sm="6" lg="6" xl="3" key={blg.tokenId}>
                  <Blog
                    image=""
                    title={data.rarityRank.toString()}
                    subtitle="rarity rank"
                    text={data.attributes ?? []}
                    color="primary"
                    url={
                      "https://www.cryptoslam.io/" +
                      blg.collectionId +
                      "/mint/" +
                      blg.tokenId
                    }
                  />
                </Col>
              );
            })}
          </Row>
        ) : (
          <div className="w-full flex flex-col justify-center items-center">
            <div className="flex justify-center uppercase text-3xl gap-2 mt-10">
            <p>no result found </p>
            <HeartCrack className="size-10 text-red-500" />
          </div>
          <Link href={"/"}>
              <Button className="w-[120px] h-[50px]">Return Home</Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
