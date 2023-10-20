
 ## about tRPC
https://trpc.io/docs

typeacript限定の型安全なAPIの構築
クライアント・サーバー間で型の共有
node, express, next等のホストに依存。アダプターを介して機能する


### concept
#### Server
`t.procedure` : バックエンドAPI構築用関数。一般的に`publicProcedure`として再利用する
以下を合わせて活用する
- `.query`: データの取得(get)
- `.mutation`: データの送信(post, put, delete)
- `.input`: データのバリデーション。主に`mutation`の前にzodを使って検証を行う

#### Client
`@tanstack/react-query`を使ってる
- `useQuery`: データの取得。
- `useMutation`: データの操作(作成/更新/削除、またはサーバーの副作用の実行)
