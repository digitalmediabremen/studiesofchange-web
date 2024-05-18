import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function TextBody({ content }: Props) {
  return (
    <div className="max-w-2xl mt-20">
      <div
        className={markdownStyles["markdown"]}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
