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

const Blog = ({ image, title, subtitle, text, color, url }) => {
  return (
    <Card>
      {/* <Image alt="Card image cap" src={image} className="w-100 h-100" /> */}
      <CardBody className="p-4">
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardText className="mt-3">
          {text.map(item => {
            for (const key in item) {
              if (Object.hasOwnProperty.call(item, key)) {
                const element = item[key];

                return (
                  <div>
                    <p>{key}: {element.value}</p>
                  </div>
                )
              }
            }
          }
          )}

        </CardText>
        <a href={url} target="_blank"><Button color={color}>Read More</Button></a>
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
