import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';

const file = path.resolve('./src/data/site.yaml');
const raw = fs.readFileSync(file, 'utf-8');

export const site = yaml.load(raw) as {
  site_name: string;
  site_short_name: string;
  tagline: string;
  hero: { eyebrow: string; background_image: string; buttons: { label: string; href: string }[] };
  about: {
    heading: string;
    body: string;
    mission: string;
    vision: string;
    director: { name: string; designation: string; photo: string; message: string };
  };
  gallery: { filename: string; caption: string }[];
  contact: { address: string; email: string; phone: string; map_embed_url: string };
  join: {
    heading: string;
    intro: string;
    formspree_endpoint: string;
    positions: string[];
    opportunities: { title: string; description: string }[];
    available_topics: string[];
    application_process: string;
  };
  footer: { socials: { label: string; href: string }[] };
};
