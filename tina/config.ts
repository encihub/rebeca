import { defineConfig, type Template } from 'tinacms';
import { dash } from 'radashi';

const replaceMap = {
  á: 'a',
  é: 'e',
  í: 'i',
  ó: 'o',
  ú: 'u',
  Á: 'A',
  É: 'E',
  Í: 'I',
  Ó: 'O',
  Ú: 'U',
};

export const replaceAccent = (str: string) =>
  str ? str.replace(/([áéíóúÁÉÍÓÚ])/, (_, p1) => replaceMap[p1]) : str;

const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  'master';

const textBlock: Template = {
  name: 'text',
  label: 'Text',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'rich-text',
    },
  ],
};

const headingBlock: Template = {
  name: 'heading',
  label: 'Heading',
  fields: [
    {
      type: 'string',
      name: 'heading',
      label: 'Heading',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `Heading: ${item?.heading}` }),
  },
};

const callToActionBlock: Template = {
  name: 'cta',
  label: 'Call To Action',
  fields: [
    {
      name: 'text',
      label: 'Text',
      type: 'rich-text',
    },
    {
      name: 'id',
      label: 'ID',
      type: 'string',
    },
  ],
  ui: {
    itemProps: (item) => ({ label: `CTA: ${item?.id}` }),
  },
};

export default defineConfig({
  branch,

  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },

  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },

  schema: {
    collections: [
      {
        name: 'service',
        label: 'Services',
        path: 'content/services',
        format: 'mdx',
        ui: {
          router: (props) =>
            `/servicios/${props.document._sys.filename.toLowerCase()}`,
          filename: {
            slugify: (values) => dash(replaceAccent(values.title)),
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          { type: 'image', name: 'cover', label: 'Cover' },
          { type: 'string', name: 'color', label: 'Color' },
          { type: 'number', name: 'priority', label: 'Priority' },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [textBlock, headingBlock, callToActionBlock],
          },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'content/pages',
        format: 'mdx',
        ui: {
          router: (props) => `/${props.document._sys.filename.toLowerCase()}`,
          filename: {
            slugify: (values) => dash(replaceAccent(values.title)),
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            name: 'blocks',
            label: 'Blocks',
            type: 'object',
            list: true,
            templates: [textBlock, headingBlock, callToActionBlock],
          },
        ],
      },
      {
        name: 'social',
        label: 'Social',
        path: 'content/social',
        format: 'toml',
        ui: {
          filename: {
            slugify: (values) => dash(replaceAccent(values.title)),
          },
        },
        fields: [
          {
            type: 'string',
            name: 'title',
            label: 'Title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            name: 'url',
            label: 'URL',
            required: true,
          },
          {
            type: 'string',
            name: 'icon',
            label: 'Icon',
            required: true,
            options: ['FaPhone', 'FaEnvelope'],
          },
        ],
      },
    ],
  },
});
