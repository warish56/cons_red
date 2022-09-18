import { Container } from "./style";

export type IconProps = {
  name: string;
  containerProps?: React.HtmlHTMLAttributes<HTMLDivElement>;
};

export const Icon = ({ name, containerProps = {} }: IconProps) => {
  return (
    <Container {...containerProps}>
      <i className={name} />
    </Container>
  );
};
