import YAML from 'yaml';
import Header from './components/Header/Header.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import Footer from './components/Footer/Footer.jsx';

const files = import.meta.glob('./content/works/**/index.mdx', { eager: true, as: 'raw' });
const assets = import.meta.glob('./content/works/**/*.{png,jpg,jpeg,webp,avif,gif,svg,mp4,webm}', {
  eager: true,
  import: 'default',
});

function parseFrontmatter(raw) {
  const m = /^---\s*[\r\n]+([\s\S]*?)\s*---/m.exec(raw);
  try { return m ? YAML.parse(m[1] || '') : null; } catch { return null; }
}

function resolveAsset(mdxPath, relPath) {
  if (!relPath) return null;
  if (relPath.startsWith('/')) return relPath;
  const dir = mdxPath.replace(/\/index\.mdx$/, '');
  const key = `${dir}/${relPath.replace(/^.\//, '')}`;
  return assets[key] || null;
}

const cards = Object.entries(files).map(([path, raw]) => {
  const data = parseFrontmatter(raw);
  const media = data.media ? {
    ...data.media,
    src: resolveAsset(path, data.media.src),
    poster: resolveAsset(path, data.media.poster),
  } : null;

  return {
    cardName: data.cardName ?? 'Untitled',
    listOfTags: data.listOfTags ?? [],
    media,
  };
});


export default function App() {
  return (
    <>
      <Header />
      <Gallery listOfCards={cards} />
      <Footer />
    </>
  );
}
