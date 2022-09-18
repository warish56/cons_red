import { Icon, IconProps } from "@components/Icon";
import { Container } from "./style";

type LinkIconProps = {
  iconProps: IconProps;
  linkProps: React.LinkHTMLAttributes<HTMLAnchorElement>;
  containerProps?: React.HTMLAttributes<HTMLDivElement>;
};

export const LinkIcon = ({
  iconProps,
  linkProps,
  containerProps,
}: LinkIconProps) => {
  return (
    <Container {...containerProps}>
      <a target="_balnk" referrerPolicy="no-referrer" {...linkProps}>
        <Icon {...iconProps} />
      </a>
    </Container>
  );
};
