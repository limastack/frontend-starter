import { NAVBAR_LINKS } from "@/global-config/constant/navbar";
import Header from "../organisms/header";
import { Button } from "../atoms/button";

const HeaderTemplate = () => {
    return (
        <Header
            brand={{
                href: '/',
                label: 'Frontend Starter'
            }}
            navbar={{
                links: NAVBAR_LINKS,
                button: <Button variant="outline" size="sm">Get in touch</Button>
            }}

        />
    )
}

HeaderTemplate.displayName = 'HeaderTemplate';

export default HeaderTemplate;