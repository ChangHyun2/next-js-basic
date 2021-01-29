import Markdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { ColdarkCold } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import gfm from 'remark-gfm';

const chars = Array(26)
  .fill(0)
  .map((a, i) => String.fromCharCode(i + 97));

export const randomChar = () => {
  return chars[Math.floor(Math.random() * 26)];
};

// markdown
// https://github.com/react-syntax-highlighter/react-syntax-highlighter/issues/230
const renderers = {
  code: ({ value }) => (
    <SyntaxHighlighter
      style={ColdarkCold}
      language={'javascript'}
      children={value}
    />
  ),
};

export const MD = (props) => (
  <div className="wrapper">
    <style jsx>{`
      .wrapper {
        padding: 20px;
        width: 600px;
      }

      font-size: 12px;
    `}</style>
    <Markdown arkdown plugins={[gfm]} renderers={renderers}>
      {props.children}
    </Markdown>
  </div>
);
