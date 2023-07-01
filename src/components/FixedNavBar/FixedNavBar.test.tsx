import { FixedNavBar } from "./FixedNavBar";
import { render } from "@testing-library/react";

describe('<FixedNavBar/> render', () => {
    const {container} = render(<FixedNavBar/>);

    expect.assertions(2);
    test('The NavBar is being rendered',  () => {
        expect(container).toBeInTheDocument();
        expect(container).toMatchSnapshot();
        
    })
})