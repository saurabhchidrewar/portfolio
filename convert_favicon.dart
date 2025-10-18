import 'dart:io';
import 'package:path/path.dart' as path;

void main() async {
  // Create a temporary directory
  final tempDir = Directory.systemTemp.createTempSync();

  try {
    // Run the conversion command
    final result = await Process.run('convert', [
      'web/favicon.svg',
      '-background',
      'none',
      '-resize',
      '32x32',
      'web/favicon.png'
    ]);

    if (result.exitCode != 0) {
      print('Error converting favicon: ${result.stderr}');
      exit(1);
    }

    print('Favicon converted successfully!');
  } catch (e) {
    print('Error: $e');
    print('Please make sure ImageMagick is installed on your system.');
    print('You can install it using:');
    print('  - macOS: brew install imagemagick');
    print('  - Ubuntu: sudo apt-get install imagemagick');
    print(
        '  - Windows: Download from https://imagemagick.org/script/download.php');
    exit(1);
  } finally {
    // Clean up
    tempDir.deleteSync(recursive: true);
  }
}
