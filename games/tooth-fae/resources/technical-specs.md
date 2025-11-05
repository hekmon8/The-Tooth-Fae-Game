# Technical Specifications

## Development Details

### Creator Information

- **Developer**: Ev
- **Development Type**: Solo indie developer
- **Development Time**: 72 hours (Ludum Dare 58 game jam)
- **Release Date**: October 7, 2025
- **Latest Update**: 3 days after release (as of October 16, 2025)

### Game Jam Context

**Ludum Dare 58**
- **Theme**: Collector
- **Format**: 72-hour game jam
- **Category**: Solo developer submission
- **Submission Page**: [https://ldjam.com/events/ludum-dare/58/the-tooth-fae](https://ldjam.com/events/ludum-dare/58/the-tooth-fae)

## Technology Stack

### Programming

**Primary Language**: Nim
- Modern systems programming language
- Focus on efficiency and expressiveness
- Compiles to C for performance

**Graphics Framework**: SDL2
- Cross-platform multimedia library
- Hardware-accelerated 2D rendering
- Input handling and event management

### Art & Graphics

**Sprite Creation**: Asesprite
- Professional pixel art editor
- Animation timeline support
- Sprite sheet export capabilities
- Industry-standard tool for pixel art games

**Art Style**: Pixel Art
- Hand-crafted 2D sprites
- Atmospheric character and environment design
- Dark, moody color palette
- Smooth frame-by-frame animations

### Audio Production

**Music Composition**: Ableton Live
- Professional digital audio workstation (DAW)
- Original soundtrack created from scratch
- Atmospheric horror music design
- Sound effect creation and mixing

**Additional Audio Tools**: Audacity
- Open-source audio editing
- Sound effect processing
- Audio cleanup and mastering

## Platform Support

### HTML5 (Browser Version)

**Supported Browsers**:
- Google Chrome (Recommended)
- Mozilla Firefox (Recommended)
- Safari (with considerations - see below)
- Microsoft Edge
- Other modern browsers with HTML5 support

**Browser Requirements**:
- HTML5 canvas support
- WebGL support (recommended)
- JavaScript enabled
- Modern browser (released within last 2 years)

**Safari-Specific Notes**:
- Disable low power mode to prevent throttling
- Performance may vary compared to Chrome/Firefox
- Recommended to use alternative browser for best experience

### Windows Desktop

**Download Size**: 24 MB

**File Format**: .zip archive
- Extract to any location
- No installation required
- Portable executable

**System Requirements** (Estimated):
- **OS**: Windows 7 or later
- **Processor**: Modern dual-core processor
- **Memory**: 2 GB RAM minimum
- **Graphics**: Any GPU with basic 2D acceleration
- **Storage**: 100 MB available space
- **Additional**: Keyboard/mouse or controller

## Input System

### Supported Input Devices

| Input Type | Support Level | Notes |
|------------|---------------|-------|
| Keyboard | Full Support | Standard layout |
| Mouse | Full Support | Point and click |
| Xbox Controller | Full Support | Xbox 360, One, Series |
| PlayStation Controller | Full Support | PS4, PS5 |
| Generic Gamepad | Full Support | Any standard gamepad |
| Joystick | Full Support | Traditional joysticks |

### Control Configuration

- **Customizable**: Yes
- **Remapping**: Available in settings
- **Multiple Profiles**: Supported
- **Accessibility**: Configurable controls feature

## Performance Characteristics

### Frame Rate

- **Target**: 60 FPS
- **Typical Performance**: Smooth on modern systems
- **Browser Performance**: Depends on browser and system
- **Desktop Performance**: Consistent on Windows

### Resource Usage

**Browser Version**:
- **CPU**: Light to moderate
- **Memory**: ~100-200 MB
- **GPU**: Minimal 2D rendering

**Desktop Version**:
- **CPU**: Light
- **Memory**: ~100 MB
- **GPU**: Minimal requirements
- **Disk**: 24 MB installed

### Optimization Notes

- Pixel art style is performance-friendly
- 2D rendering is not resource-intensive
- Low power mode can throttle performance
- Background tabs/apps may impact browser version

## File Structure

### Download Package Contents

```
The Tooth Fae.zip
├── TheToothFae.exe (or platform executable)
├── assets/
│   ├── sprites/
│   ├── audio/
│   └── data/
└── README.txt (possibly)
```

### Asset Information

- **Sprite Resolution**: Pixel art, scalable
- **Audio Format**: Likely OGG or WAV
- **Data Files**: Game configuration and level data

## Build Process

### Compilation Pipeline

1. **Source**: Nim source code
2. **Compilation**: Nim → C
3. **Native Binary**: C → Platform executable
4. **Web Build**: SDL2 → Web (HTML5/WebAssembly)

### Development Tools Chain

```
Nim Language → SDL2 Framework → Platform Binary
     ↓              ↓
 Asesprite      Ableton Live
 (Graphics)      (Audio)
```

## Accessibility Features

### Current Support

- **Configurable Controls**: Yes
- **Multiple Input Methods**: Keyboard, mouse, gamepad
- **Fullscreen Mode**: Available
- **Volume Control**: Assumed present

### Potential Considerations

- **Visual**: High contrast pixel art
- **Audio**: Sound cues important for gameplay
- **Controls**: Fully customizable
- **Difficulty**: Fixed difficulty (game jam submission)

## Known Technical Limitations

### Browser Version

1. **Progress Persistence**: Back button clears progress
2. **Save System**: Limited or no cloud saves
3. **Performance**: Varies by browser and system
4. **Low Power Mode**: Can cause throttling on Safari/MacOS

### General Limitations

1. **Session Saves**: Progress may not persist between sessions
2. **Language**: English only
3. **Resolution**: Fixed aspect ratio (likely)
4. **Multiplayer**: Single-player only

## Updates & Maintenance

### Update History

- **Initial Release**: October 7, 2025
- **Latest Update**: October 13, 2025 (approximately)
- **Update Frequency**: Post-jam improvements

### Development Status

- **Status**: Released
- **Active Development**: Yes (post-jam updates)
- **Community Feedback**: Actively considered
- **Bug Fixes**: Ongoing

## Distribution Platforms

### Primary Distribution

**itch.io**:
- Main distribution platform
- Browser play available
- Windows download available
- Direct from developer
- Free to play

**Fan Hosting**:
- [https://playthetoothfae.com/](https://playthetoothfae.com/)
- Browser-based play
- Community-provided mirror

### Licensing

- **License**: Proprietary (developer retains rights)
- **Cost**: Free to play
- **Distribution**: Free download on itch.io
- **Commercial Use**: Creator maintains rights

## Developer Information

### Ev's Other Work

- **Portfolio**: [https://ev-dev.itch.io/](https://ev-dev.itch.io/)
- **Development Style**: Hobbyist solo game dev
- **Focus**: Free games
- **Specialty**: Atmospheric experiences

### Contact & Support

- **Primary Platform**: itch.io
- **Feedback**: Available through itch.io page
- **Bug Reports**: Via itch.io comments/ratings
- **Community**: Ludum Dare submission page

## Third-Party Tools & Libraries

### Confirmed Dependencies

| Tool/Library | Purpose | License |
|--------------|---------|---------|
| Nim | Programming Language | MIT |
| SDL2 | Graphics Framework | zlib |
| Asesprite | Sprite Creation | Proprietary |
| Ableton Live | Audio Production | Proprietary |
| Audacity | Audio Editing | GPL |

### Attribution Requirements

All tools and content created by developer Ev, with proper tool credits provided in-game and on the itch.io page.

[Play The Tooth Fae online](https://playthetoothfae.com/) to experience this technically impressive game created in just 72 hours. For gameplay information, explore the [How to Play guide](../gameplay/how-to-play.md).
