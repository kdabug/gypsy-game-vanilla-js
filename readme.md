## GAME PROPOSAL

**WIREFRAMES**
See drawn sketches of scenes for gameplay, including:

- opening forest scene (with old woman transition);
- floor scene (where gameplay happens);
- ending scene where old woman gives advice (via tarot if opt. is reached) or sends you to prison;
- potential: tarot card spread;
- reprisal to opening scene (where game loops to a reset);

**GAME DESCRIPTION**

You are walking down a road, when an old woman pops out. She drops something (this will be a text-based cue). You are sent to a 'ground scene' and told to help her pick up her items.

**This is the most viable product:** You have 20 seconds to pick up as many gems as possible. You can not pick up rocks or leaves. There will be a count-down timer, a gem counter (which removes points for picking up rocks and leaves), and a text display which tells you the gems you are picking up.

If, at the end of the timer, you have less than a certain number of gems - the old woman will call the police and claim that you are a theif! The screen turns red (with prison bars closing over?). Scene ends and 'the end' in script with a button to reload the game.

Otherwise the old woman will thank you and tell you how many of the gems you collected. She will say she has something to tell you and ask you for a series of three numbers. Those numbers will correspond with the index of all of the gems you picked up, and she will tell you that there are good things ahead for the qualities of gems that you chose.

It then cuts back to the opening scene with a 'she vanished' and a 'the end' with a congratulations on you positive future and a retry button.

**Optional addition:** a tarot card spread instead of a choosing three numbers. Still choosing three of the cards on the screen. Also still using the general area (i.e. love, adventure, career, etc.) and combining it with the read of the card.

**MARKDOWN LANGUAGE**

**MAIN TECHNOLOGIES**
css, html, javascript

arrays, random positioning, and css indexing/positionings

**OBSTACLES**
Finding out to to manipulate through CSS for different scenes.

How to allow players to pick up gems and rocks that are over leaves without counting it as a loss.

**SOLUTIONS**
Adding event listeners to 'show' and 'hide' the display of certain CSS elements depending on the timeing of the game.

Using z-index to differentiate between items?
