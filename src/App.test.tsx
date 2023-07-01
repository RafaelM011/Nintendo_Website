import { render } from "@testing-library/react";
import App from './App';

test('<App/> is being rendered', () => {
    const {container} = render(<App/>);
    expect(container).toBeInTheDocument();
});
