import { Button, Card, CardBody, CardFooter, Input } from "reactstrap";

const LaTeXField = ({ value, onChange }) => {
    return (
        <Card className="shadow-sm textfield-container">
            <CardBody className="p-3 p-md-4">
                <Input
                    name="latex"
                    type="textarea"
                    className="textfield-input"
                    placeholder="Type some LaTeX..."
                    value={value}
                    onChange={onChange}
                    // TODO: better placeholder, possibly an example
                />
            </CardBody>
            <CardFooter className="d-flex justify-content-end">
                <Button color="danger" className="mr-2" disabled={value === ""}>
                    DOWNLOAD .TEX
                </Button>
                <Button color="primary" disabled={value === ""}>
                    COPY
                </Button>
            </CardFooter>
        </Card>
    );
};

export default LaTeXField;
