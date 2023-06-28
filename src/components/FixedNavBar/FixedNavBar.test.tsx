import { FixedNavBar } from "./FixedNavBar";
import { render, screen } from "@testing-library/react";

describe('<FixedNavBar/> render', () => {
    const {container} = render(<FixedNavBar/>);
    expect.assertions(1);
    test('<FixedNavBar/> is being rendered',  () => {
        const nintendologo = screen.getByTestId('nintendo_logo')
        expect(nintendologo).toBeInTheDocument();
    })
})
