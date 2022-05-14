interface Props {
  a?: number;
  b?: string;
}

const objs: Props = { a: 5 };

const objs2: Required<Props> = { a: 5, b: "2" };
