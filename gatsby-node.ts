import { createFileNodeFromBuffer } from 'gatsby-source-filesystem';
import fetch from 'node-fetch';
import { Buffer } from 'buffer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';
import { staticMapRequest } from './src/utils';

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

// create a static map image for every RSV
exports.createSchemaCustomization = ({ actions: { createTypes } }) => {
  createTypes(`
    type MetaJson implements Node {
      geoJson: GeometryJson @link(from: "jsonId", by: "name")
      staticMap: File @link(from: "jsonId", by: "name")
    }
  `);
};

exports.onCreateNode = async ({
  node,
  actions: { createNode },
  createNodeId,
  cache,
  store,
}) => {
  if (node.internal.type === 'GeometryJson') {
    const url = staticMapRequest(node, [1600, 1600]);
    // have to use createFileNodeFromBuffer due to url length limits in createRemoteFileNode :/
    const arrBuffer = await fetch(url.toString()).then((response) =>
      response.arrayBuffer()
    );

    createFileNodeFromBuffer({
      buffer: Buffer.from(arrBuffer),
      name: node.name,
      parentNodeId: node.id,
      createNode,
      createNodeId,
      cache,
      store,
    });
  }
};