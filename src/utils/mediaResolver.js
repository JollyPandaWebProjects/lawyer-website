/**
 * Resolves a media object from media.json into a normalized shape.
 * Supports { type: "image", value, alt } and { type: "emoji", value, alt }.
 * No component code should ever branch on raw media shape directly —
 * always go through this resolver so new media types can be added
 * in one place.
 */
export function resolveMedia(media) {
  if (!media || typeof media !== 'object') {
    return { type: 'emoji', value: '❓', alt: '' };
  }

  const { type, value, alt = '' } = media;

  if (type === 'image' && value) {
    return { type: 'image', value, alt };
  }

  if (type === 'emoji' && value) {
    return { type: 'emoji', value, alt };
  }

  // Fallback: treat unknown/malformed media as an empty emoji slot
  return { type: 'emoji', value: '', alt };
}
