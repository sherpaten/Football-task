import { faker } from "@faker-js/faker";
import Button from "./Button";

const Randomize = ({ parentInputElStr }) => {
    const randomize = () => {
        const inputs = document.querySelectorAll(parentInputElStr);
        inputs.forEach((el) => {
            switch (el.type) {
                case 'text':
                    el.value = faker.location.country();
                    break;

                case 'number':
                    el.value = faker.number.int({
                        max: 10
                    });
                    break;

                case 'date':
                    const date = new Date(faker.date.anytime());
                    el.value = date.toISOString().split('T')[0];
                    break;

                default:
                //


            }
        });
    }
    return (
        <Button onClick={randomize}>Randomize</Button>
    );
}

export default Randomize;