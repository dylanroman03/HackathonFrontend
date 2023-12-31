import {
  Card,
  CardBody,
  CardImg,
  CardSubtitle,
  CardText,
  CardTitle,
  Button,
} from "reactstrap";
import PropTypes from "prop-types";
import Image from "next/image";

const Blog = ({
  image,
  title,
  subtitle,
  text,
  color,
  url,
}: {
  image: any;
  title: string;
  subtitle: string;
  text: any[];
  color: string;
  url: string;
}) => {
  return (
    <Card>
      <CardBody className="p-4">
        <div className="d-flex">
          <div
            className={`circle-box lg-box d-inline-block bg-light-success text-success`}
          >
            <i className={"bi bi-star"} />
          </div>
          <div className="ms-3">
            <h3 className="mb-0 font-weight-bold">{title}</h3>
            <small className="text-muted">{subtitle}</small>
          </div>
        </div>

        <CardText className="mt-3">
          {text.map((item, index) => {
            for (const key in item) {
              if (Object.hasOwnProperty.call(item, key)) {
                const element = item[key];

                const isDatePattern =
                  /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/.test(element.value);

                if (isDatePattern) {
                  element.value = new Date(element.value).toLocaleDateString();
                }

                return  (
                    <p  key={index}>
                      <b>{key.charAt(0).toUpperCase() + key.slice(1)}:</b>{" "}
                      {element.value}
                    </p>
                );
              }
            }
          })}
        </CardText>
        <a href={url} target="_blank">
          <Button color={color} size="lg">
            Read More
          </Button>
        </a>
      </CardBody>
    </Card>
  );
};

Blog.propTypes = {
  title: PropTypes.string,
  image: PropTypes.any,
  subtitle: PropTypes.string,
  text: PropTypes.array,
  color: PropTypes.string,
  url: PropTypes.string,
};
export default Blog;
