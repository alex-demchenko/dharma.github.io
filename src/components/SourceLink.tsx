interface Props {
  link: string;
}

export function SourceLink(props: Props) {
  return (
    <a href={props.link} rel="nofollow" target="_blank">
      <sup>[*]</sup>
    </a>
  );
}
