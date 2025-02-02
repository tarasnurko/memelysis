import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
    schema: 'https://api.studio.thegraph.com/query/83028/rivens-sepolia/version/latest',
    documents: ['./graphql/schemas.graphql'],
    generates: {
        './gql/': {
            preset: 'client',
            plugins: [],
        },
    },
};

export default config;