# How images work on this site

Demo images have been added so you can see exactly how this works:
- `public/images/people/rafiul-islam.jpg`, `nusrat-jahan.jpg`,
  `tanvir-ahmed.jpg`, `farzana-kabir.jpg` — used as `photo:` for the 4 demo
  people.
- `public/images/news/best-paper-award-demo.jpg` — used as `image:` on the
  "Best Paper Award" news post.

They're simple placeholder graphics (initials on a colored background) —
replace them with real photos whenever you're ready.

## To replace a photo

1. Get your image file (JPG or PNG). Square photos work best for people
   (e.g. 400×400px); wide/16:9 images work best for news (e.g. 1200×675px).
2. In the repo on github.com, go to the matching folder:
   - People photos → `public/images/people/`
   - News images → `public/images/news/`
   - General lab photos → `public/images/lab/`
3. Click **"Add file" → "Upload files"**, drag your image in, and commit.
4. Open the person/news `.md` file that should use it (in
   `src/content/...`) and set the `photo:` or `image:` field to the path,
   **relative to `public/`, no leading slash**, e.g.:
   ```yaml
   photo: "images/people/your-file-name.jpg"
   ```
5. Commit. That's it — no code changes needed.

## If you leave `photo:` blank

People without a `photo` field automatically get a colored circle with
their initials instead (see `src/components/Avatar.astro`) — so it's
completely fine to add a person before you have their photo ready.

## Recommended image sizes

| Use | Suggested size | Shape |
|---|---|---|
| Person photo | 400×400px+ | Square |
| News image | 1200×675px | 16:9 wide |
| Lab/general photos | 1600px wide | Any |

Keep file sizes reasonable (under ~500KB) so pages load quickly — most
photo editors or an online compressor (e.g. squoosh.app) can do this in
seconds.
