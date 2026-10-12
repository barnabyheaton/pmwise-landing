import {
  ACKNOWLEDGEMENT_VIDEO_SRC,
  ACKNOWLEDGEMENT_CAPTIONS,
  ACKNOWLEDGEMENT_POSTER,
  ACKNOWLEDGEMENT_TRANSCRIPT,
} from './acknowledgementVideo'

// WCAG 2.2 AA: captions on by default (1.2.2), a full transcript beside the video (1.2.1, and
// for anyone who would rather read), native controls so it is keyboard operable. The places on
// the map frames are all spoken, so the picture carries nothing the sound does not (1.2.5).
// preload="none": nothing downloads until someone presses play — the file is ~100 MB and every
// byte served counts against the Supabase plan's traffic allowance.
export default function AcknowledgementVideo() {
  return (
    <figure className="mt-8">
      <video
        controls
        preload="none"
        playsInline
        poster={ACKNOWLEDGEMENT_POSTER}
        aria-label="Acknowledgement of Country, by Barnaby Heaton"
        className="aspect-video w-full rounded-lg bg-brand-dark"
      >
        <source src={ACKNOWLEDGEMENT_VIDEO_SRC} type="video/mp4" />
        <track
          kind="captions"
          src={ACKNOWLEDGEMENT_CAPTIONS}
          srcLang="en-AU"
          label="English captions"
          default
        />
        Your browser cannot play this video. The transcript below has every word of it.
      </video>
      <figcaption className="mt-3 font-display text-[15px] text-brand-dark/75">
        Acknowledgement of Country · about 5 minutes · captions on
      </figcaption>
      <details className="mt-4 rounded-lg border border-brand-dark/15 px-4 py-3">
        <summary className="cursor-pointer font-display text-[16px] font-semibold text-brand-700 hover:text-brand-800">
          Read the transcript
        </summary>
        <div className="mt-3 space-y-4 text-[17px] leading-[1.6] text-brand-dark/85">
          {ACKNOWLEDGEMENT_TRANSCRIPT.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </details>
    </figure>
  )
}
