import 'package:flutter/material.dart';

class SignInPage extends StatelessWidget {
  const SignInPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.black45,
        elevation: 2,
        leading: Icon(Icons.menu),
        title: Text('AppBar Title'),
      ),
      body: Center(
        child: Text('Login Page'),
      ),
    );
  }
}
