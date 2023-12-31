"use client"

import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Table, Button } from "reactstrap";
import { Col } from "reactstrap";
import json from '@/app/data/top100_copy.json';
import Link from 'next/link';


const ProjectTables = () => {
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const visibleData = json.data.slice(firstItemIndex, lastItemIndex);

  const nextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <Card>
      <CardBody>
        <CardTitle tag="h5">Top 100</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          Top 100 NTFs
        </CardSubtitle>
        <div className="table-responsive">
          <Table className="text-nowrap mt-3 align-middle" borderless>
            <thead>
              <tr>
                <th>Rank</th>
                <th>Collection Image</th>
                <th>Collection Name</th>
                <th>Buyer Count</th>
                <th>Seller Count</th>
                <th>Sales Volume (USD)</th>
              </tr>
            </thead>
            <tbody>
              {visibleData.map((collection, index) => {
                return (
                  <tr key={index} className="border-top">
                    <td>{collection.rank}</td>
                    <td>
                      <img
                        src={collection.collectionImageURL ?? ""}
                        alt={collection.collectionName}
                        width="50"
                        height="50"
                      />
                    </td>
                    <td>
                      <Link href={"/collection/" + collection.collectionId}>
                        {" "}
                        {collection.collectionName}{" "}
                      </Link>{" "}
                    </td>
                    <td>{collection.buyerCount}</td>
                    <td>{collection.sellerCount}</td>
                    <td>
                      {collection.quote.USD
                        ? collection.quote.USD.salesVolume.toFixed(2)
                        : 0.0}
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot className="flex items-center gap-2 mt-2">
              <Button onClick={prevPage} disabled={currentPage === 1}>
                Previous
              </Button>{" "}
              <Button
                onClick={nextPage}
                disabled={lastItemIndex >= json.data.length}
              >
                Next
              </Button>
            </tfoot>
          </Table>
        </div>
      </CardBody>
    </Card>
  );
};

export default ProjectTables;
