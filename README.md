reference : https://www.youtube.com/watch?v=EJVGzyWSCBE

## ts js

```js
npm i typescript @types/node @types/react --save-dev
```

## public
 
## pages

index.js : root domain을 요청할 경우
path.js : domain/path를 요청할 경우

## document.js

모든 page에 렌더링되는 default HTML 마크업
```js
// _document.js

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta property="custom" content="yolo" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}

```

## next/js

page별로 SEO에 필요한 HTML 마크업

```js
import Head from 'next/head';
```

## 서버 렌더링 & 클라이언트 렌더링

서버에서 먼저 HTML 마크업으로 서버렌더링이 되므로 console.log가 서버와 클라이언트에서 모두 찍힌다. 

```js

export default function Page(){
  console.log('logged in server and client')

  return <div>hello</div>
}

```

_document 파일은 예외적으로 서버렌더링을 위해 사용되는 파일이므로 
클라이언트에서 로깅되지 않는다.

서버 렌더링 시 컴포넌트를 캐싱한다.
- 컴포넌트명이 바뀌거나
- props, state가 바뀔 때 (?)

## css

css file
_app에서는 `import from 'file.css'` 형태로 import할 수 있고

css module
page에서는 css 모듈 형태로 import할 수 있다.

neext.js config을 설정을 통해 변경 가능하다. 

sass 지원
sass도 지원한다

<style jsx></style>

## api 폴더

api 폴더에서 api 작성 가능
api 폴더에서만! 가능

NextApiRequest, NextApiResponse
node.js에서 extends한듯

```js

const data = {
  'changhyun': {
    num:42,
  }
}
export default function (req: NextApiRequest, res: NextApiResponse) {
  const {username, password} = req.body
  const {age} = req.query

  console.log(age, 'query')
  
  res.setHeader('Set-cookie', 'myKey=취뽀')
  res.statusCode = 200
  return res.json({ data[username] });
}

// in client,
fetch('http://localhost:3000/api/random-number?age=24', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify({
      username: 'admin',
      password: 1234 
    })
  }).then(res => res.json()).then(data => console.log(data))
```

## link

**href**

practice/router 폴더 참고

href="/" => 도메인
href="/path" => 도메인/path
href="path" => 현재 디렉토리 기준
href="../path2" => 이동 가능

```js
<Link href="/page1">page1</Link>
```

**[name].tsx**

[name].tsx으로 파일명을 작성할 경우, 파일명에 대응되는 모든 url에 의해 라우팅된다.
(webpack [name].[hash].js)

```js
directory
  [name].tsx

url : directory/name1
url : directory/name2
url : directory => 404 error
url : directory/name3/name4 => 404 error

directory
  [name] (subDirectory)
    [name].tsx
    index.tsx 

url : directory/name1 (directory/[name]/index.tsx)
url : directory/name2 
url : directory/name3/name4 (directory/[name]/[name].tsx)
```

**[...name].tsx**

위치한 곳으로부터 모든 하위 paths를 커버한다.
router.query를 사용할 경우 하위 paths가 배열로 담겨진다.

위치한 곳을 포함할 경우 [[...name]].tsx으로 작성

## alias

js/tsconfig.json 파일만 작성하면 웹팩 alias까지 수정해주는 듯

```js
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "utils": ["utils/index.js"]
    },
```

## getStaticProps

서버에서 미리 fetch할 데이터를 가져와 서버렌더링할 컴포넌트에 props 전달
getStaticProps => getStaticPaths => 컴포넌트 서버렌더링 => 캐싱

## getStaticPaths

서버에서 정적 paths에 대한 페이지 캐싱
fallback이 true일 경우 path가 요청될 떄마다 캐싱


