document.onkeydown = function(e) {
    e.preventDefault();

    var char = String.fromCharCode(e.which);
        keyCode = event.keyCode;
        charKey = document.querySelector('#char span');
        decode = document.querySelector('.value');

    decode.innerHTML = (e.which);

    if(keyCode == 8 || keyCode == 9 || keyCode >= 12 && keyCode <= 20 || keyCode >= 27 && keyCode <= 46 || keyCode >= 91 && keyCode <= 123  || keyCode == 144 || keyCode == 145 ||  keyCode >= 160 && keyCode <= 194  ||  keyCode >= 219 && keyCode <= 225 ){
        switch (keyCode) {
        case 112:
            charKey.innerHTML = 'F1';
            break;
        case 113:
            charKey.innerHTML = 'F2';
            break;
        case 114:
            charKey.innerHTML = 'F3';
            break;
        case 115:
            charKey.innerHTML = 'F4';
            break;
        case 116:
            charKey.innerHTML = 'F5';
            break;
        case 117:
            charKey.innerHTML = 'F6';
            break;
        case 118:
            charKey.innerHTML = 'F7';
            break;
        case 119:
            charKey.innerHTML = 'F8';
            break;
        case 120:
            charKey.innerHTML = 'F9';
            break;
        case 121:
            charKey.innerHTML = 'F10';
            break;
        case 122:
            charKey.innerHTML = 'F11';
            break;
        case 123:
            charKey.innerHTML = 'F12';
            break;
        case 8:
            charKey.innerHTML = 'backspace/delete';
            break;
        case 9:
            charKey.innerHTML = 'Tab';
            break;
        case 12:
            charKey.innerHTML = 'Clear';
            break;
        case 13:
            charKey.innerHTML = 'Enter';
            break;
        case 16:
            charKey.innerHTML = 'Shift';
            break;
        case 17:
            charKey.innerHTML = 'Ctrl';
            break;
        case 18:
            charKey.innerHTML = 'Alt';
            break;
        case 19:
            charKey.innerHTML = 'Break/Pause';
            break;
        case 20:
            charKey.innerHTML = 'Caps Lock';
            break;
        case 27:
            charKey.innerHTML = 'Esc';
            break;
        case 32:
            charKey.innerHTML = 'Пробел';
            break;
        case 33:
            charKey.innerHTML = 'Page Up';
            break;
        case 34:
            charKey.innerHTML = 'Page Down';
            break;
        case 35:
            charKey.innerHTML = 'End';
            break;
        case 36:
            charKey.innerHTML = 'Esc/Home';
            break;
        case 37:
            charKey.innerHTML = 'Arrow left';
            break;
        case 38:
            charKey.innerHTML = 'Arrow up';
            break;
        case 39:
            charKey.innerHTML = 'Arrow right';
            break;
        case 40:
            charKey.innerHTML = 'Arrow down';
            break;
        case 41:
            charKey.innerHTML = 'Select';
            break;
        case 42:
            charKey.innerHTML = 'Print';
            break;
        case 43:
            charKey.innerHTML = 'Execute';
            break;
        case 44:
            charKey.innerHTML = 'Print Screen';
            break;
        case 45:
            charKey.innerHTML = 'Insert';
            break;
        case 46:
            charKey.innerHTML = 'Delete';
            break;
        case 91:
            charKey.innerHTML = 'left Windows/MacOs';
            break;
        case 92:
            charKey.innerHTML = 'right Windows';
            break;
        case 93:
            charKey.innerHTML = 'Windows Menu/right MacOs';
            break;
        case 96:
            charKey.innerHTML = 'Numpad 0';
            break;
        case 97:
            charKey.innerHTML = 'Numpad 1';
            break;
        case 98:
            charKey.innerHTML = 'Numpad 2';
            break;
        case 99:
            charKey.innerHTML = 'Numpad 3';
            break;
        case 100:
            charKey.innerHTML = 'Numpad 4';
            break;
        case 101:
            charKey.innerHTML = 'Numpad 5';
            break;
        case 102:
            charKey.innerHTML = 'Numpad 6';
            break;
        case 103:
            charKey.innerHTML = 'Numpad 7';
            break;
        case 104:
            charKey.innerHTML = 'Numpad 8';
            break;
        case 105:
            charKey.innerHTML = 'Numpad 9';
            break;
        case 106:
            charKey.innerHTML = 'Numpad *';
            break;
        case 107:
            charKey.innerHTML = 'Numpad +';
            break;
        case 108:
            charKey.innerHTML = 'Numpad period';
            break;
        case 109:
            charKey.innerHTML = 'Numpad -';
            break;
        case 110:
            charKey.innerHTML = 'Numpad .';
            break;
        case 111:
            charKey.innerHTML = 'Numpad /';
            break;
        case 144:
            charKey.innerHTML = 'Num Lock';
            break;
        case 145:
            charKey.innerHTML = 'Scroll Lock';
            break;
        case 160:
            charKey.innerHTML = '^';
            break;
        case 161:
            charKey.innerHTML = '!';
            break;
        case 163:
            charKey.innerHTML = '#';
            break;
        case 164:
            charKey.innerHTML = '$';
            break;
        case 165:
            charKey.innerHTML = 'ù';
            break;
        case 166:
            charKey.innerHTML = 'Page backward';
            break;
        case 167:
            charKey.innerHTML = 'Page forward';
            break;
        case 169:
            charKey.innerHTML = '(';
            break;
        case 170:
            charKey.innerHTML = '*';
            break;
        case 171:
            charKey.innerHTML = '~ + *';
            break;
        case 173:
            charKey.innerHTML = '-';
            break;
        case 174:
            charKey.innerHTML = 'volume -';
            break;
        case 175:
            charKey.innerHTML = 'volume +';
            break;
        case 176:
            charKey.innerHTML = 'next';
            break;
        case 177:
            charKey.innerHTML = 'previous';
            break;
        case 178:
            charKey.innerHTML = 'stop';
            break;
        case 179:
            charKey.innerHTML = 'play/pause';
            break;
        case 180:
            charKey.innerHTML = 'e-mail';
            break;
        case 181:
            charKey.innerHTML = 'mute/unmute';
            break;
        case 186:
            charKey.innerHTML = ';';
            break;
        case 187:
            charKey.innerHTML = '=';
            break;
        case 188:
            charKey.innerHTML = ',';
            break;
        case 189:
            charKey.innerHTML = '–';
            break;
        case 190:
            charKey.innerHTML = '>';
            break;
        case 191:
            charKey.innerHTML = '/';
            break;
        case 192:
            charKey.innerHTML = '`';
            break;
        case 193:
            charKey.innerHTML = '?';
            break;
        case 194:
            charKey.innerHTML = 'Numpad .';
            break;
        case 219:
            charKey.innerHTML = '(';
            break;
        case 220:
            charKey.innerHTML = 'back slash';
            break;
        case 219:
            charKey.innerHTML = ')';
            break;
        case 220:
            charKey.innerHTML = '"';
            break;
        case 221:
            charKey.innerHTML = '`';
            break;
        case 222:
            charKey.innerHTML = 'left/right MacOs';
            break;
        case 225:
            charKey.innerHTML = 'altgr';
            break;
    }
    } else{
        charKey.innerHTML = char;
    }

};