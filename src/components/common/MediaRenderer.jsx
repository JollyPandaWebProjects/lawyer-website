import { resolveMedia } from '../../utils/mediaResolver';

/**
 * Renders a media object ({ type: 'image' | 'emoji', value, alt }) without
 * requiring any code changes when content editors switch between an image
 * and an emoji in the JSON data.
 */
export default function MediaRenderer({ media, className = '', emojiClassName = '', loading = 'lazy' }) {
  const resolved = resolveMedia(media);

  if (resolved.type === 'image' && resolved.value) {
    return (
      <img
        src={resolved.value}
        alt={resolved.alt || ''}
        className={className}
        loading={loading}
        decoding="async"
      />
    );
  }

  if (resolved.type === 'emoji' && resolved.value) {
    return (
      <span
        role="img"
        aria-label={resolved.alt || ''}
        className={`inline-flex items-center justify-center ${emojiClassName}`}
      >
        {resolved.value}
      </span>
    );
  }

  return null;
}
