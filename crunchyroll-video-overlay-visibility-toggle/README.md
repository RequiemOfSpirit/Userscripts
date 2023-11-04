## Crunchyroll video overlay visibility toggle

**Script Link**: https://greasyfork.org/en/scripts/479049-crunchyroll-video-overlay-visibility-toggle

This script adds an event listener to the Crunchyroll video player to allow toggling visibility. When focused on a Crunchyroll video player, press `h` to toggle overlay visibility _(toggles between 0 and 1 `opacity`)_.

This script changes `opacity` and not `display` or `visibility` to still allow clicking to pause/play videos and double clicking to fullscreen videos. This also means if you accidentally click the bottom of the video, you could click somewhere in the still active scrub-bar and jump to a different part of the video unintentionally.

I wrote this script because I tend to pause videos or move my mouse around a lot while watching anime on Crunchyroll and I found the dimmed background of the Crunchyroll video player overlay that sticks around for a while to be very distracting.
